from flask import Blueprint, render_template, redirect, url_for, current_app, request, flash, json, g
from form import LusaContact, LusaSubscriber, LusaContactInContactus
from datetime import datetime
from bson.objectid import ObjectId
import os
import pymongo
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import nltk

try:
    sid = SentimentIntensityAnalyzer()
except LookupError:
    nltk.download('vader_lexicon')
    sid = SentimentIntensityAnalyzer()


app_bluePrint = Blueprint("lusaPrint", __name__)


certification = [
    {
        "id": 1,
        "img" : "static/img/Compliance/bsci.png",
        "description": "Business Social Compliance Initiative"
    },
    {
        "id": 2,
        "img" : "static/img/Compliance/controlUnion.png",
        "description": "Control Union Certification"
    },
    {
        "id": 3,
        "img" : "static/img/Compliance/higgIndex.png",
        "description": "Higg Index"
    },
    {
        "id": 4,
        "img" : "static/img/Compliance/sedex.png",
        "description": "SMETA certification"
    },
    {
        "id": 5,
        "img" : "static/img/Compliance/warp.png",
        "description": "Worldwide Responsible Accredited Production"
    },
    {
        "id": 6,
        "img" : "static/img/Compliance/MIN.png",
        "description": "Make in India"
    }
]

standard = [
    {
        "id": 1,
        "img" : "static/img/FABRICS/bci.png",
        "description": "Better Cotton Initiative"
    },
    {
        "id": 2,
        "img" : "static/img/FABRICS/gots.png",
        "description": "Global Organic Textile Standard"
    },
    {
        "id": 3,
        "img" : "static/img/FABRICS/grs.png",
        "description": "Global Recycled Standard"
    },
    {
        "id": 4,
        "img" : "static/img/FABRICS/oekotex.png",
        "description": "OEKO-TEX Standard"
    },
    {
        "id": 5,
        "img" : "static/img/FABRICS/recyc.png",
        "description": "RCS (Recycled Claim Standard)"
    },
    {
        "id": 6,
        "img" : "static/img/FABRICS/EF.png",
        "description": "EuropeanFlax™"
    }
]


brands = [
    {
        "id": 1,
        "img" : "static/img/Brands/BBG.png",
        "description": "Billabong"
    },
    {
        "id": 2,
        "img" : "static/img/Brands/hippie.png",
        "description": "The Hippie Shake"
    },
    {
        "id": 3,
        "img" : "static/img/Brands/lila.png",
        "description": "Lila"
    },
    {
        "id": 4,
        "img" : "static/img/Brands/liva.png",
        "description": "Liva Larsen"
    },
    {
        "id": 5,
        "img" : "static/img/Brands/mora.png",
        "description": "Mora Surf Boutique"
    },
    {
        "id": 6,
        "img" : "static/img/Brands/naudic.png",
        "description": "Naudic"
    },
    {
        "id": 7,
        "img" : "static/img/Brands/ph.png",
        "description": "Pick Happy"
    }
]


@app_bluePrint.before_request
def before_request():
    g.db = current_app.config['db']

def serialize_document(doc):
    """Converts ObjectId to string in a MongoDB document."""
    if isinstance(doc, dict):
       for key, value in doc.items():
          if isinstance(value, ObjectId):
               doc[key] = str(value)
          elif isinstance(value, dict):
               serialize_document(value) # Recursive call for nested dicts
          elif isinstance(value, list):
             for i, item in enumerate(value):
                if isinstance(item, dict):
                    serialize_document(item) # recursive call for nested dicts in lists
                elif isinstance(item, ObjectId):
                   value[i]= str(item)
    return doc

@app_bluePrint.context_processor
def inject_globals():
    subForm = LusaSubscriber()
    if subForm.validate_on_submit():
        flash('We have received your request, NOW we will reach out to your mail.... with updates', 'success')
        return redirect(url_for('lusaPrint.home'))
    return dict(json=json, subForm=subForm)

@app_bluePrint.route('/', methods=['GET','POST'])
def home():
    reviews = g.db.reviews.find()  # Fetch all reviews from lusabuyBD database
    reviews_list = list(reviews) # Convert cursor to list
    certification0 = certification + standard + brands
    certification1 = certification[1:] + standard + brands + certification[:1]
    certification2 = certification[2:] + standard + brands + certification[:2]
    return render_template('index.html', title='Home', certification = certification, certification0 = certification0, certification1 = certification1, certification2 = certification2, standard = standard, brands = brands, reviews=reviews_list)

@app_bluePrint.route('/blog')
def blog():
    return render_template('blog.html', title='Blog')


@app_bluePrint.route('/review', methods=["GET", "POST"])
def review():
    if request.method == "POST":
        inp = request.form.get("inp")

        # Sentiment Analysis
        scores = sid.polarity_scores(inp)
        compound_score = scores['compound']

        # Determine Star Rating based on Compound Score
        if compound_score >= 0.8:
            star_rating = 5
        elif compound_score >= 0.6:
            star_rating = 4
        elif compound_score >= 0.2:
            star_rating = 3
        elif compound_score > -0.2:
            star_rating = 2
        else:
            star_rating = 1

        # Save to MongoDB - Save to lusabuyBD database
        g.db.reviews.insert_one({
            "review_text": inp,
            "star_rating": star_rating,
            "compound_score": compound_score,
            "timestamp": datetime.utcnow()
        })

        flash('Thank you for your review!', 'success')
        return redirect(url_for('lusaPrint.home'))

    return render_template('review.html', title='review')

@app_bluePrint.route('/contactUs')
def contactUs():
    contactUsForm = LusaContactInContactus()
    return render_template('contactUs.html', title='Contact Us', contactUsForm=contactUsForm)