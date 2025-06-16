from flask_wtf import FlaskForm

from wtforms import StringField, PasswordField, SubmitField, BooleanField, TextAreaField
# StringFild is used to define the variable going to use a string as an input like userName, Email, FullName...
# PasswordField is used to define a variable going to use a password as an input like password, conform pass....
# SubmitField is used to define a button to submit a form!!
# BooleanField is used to define an option to users to do this perticular thing or not!!

from wtforms.validators import DataRequired, Length, Email, EqualTo
# Validator is used to give an indentifier a property like
    # DataRequired: The user must have to add some data in this field
    # Length: The user must enter this amount of data lenth in the field Length(min=2,max=50)
    # EqualTo: The credentials going to compare after using this method if both are
        # equal then continue else through error false



# here we are going to allocate all the text boxes going to use in form

class LusaContact(FlaskForm):
    fullName = StringField('Full Name *',
                           validators=[DataRequired()])
    lusaMessage = TextAreaField('Message *',
                           validators=[DataRequired(), Length(min=20)])
    email = StringField('Email *',
                        validators=[DataRequired(), Email()])
    phNumber = StringField('Phone Number',
                           validators=[Length(min=10, max=10)])
    submit = SubmitField('Send')


class LusaSubscriber(FlaskForm):
    email = StringField('Email address *',
                        validators=[DataRequired(), Email()])
    name = StringField('Name *',
                        validators=[DataRequired()])
    message = TextAreaField('Message',
                           validators=[Length(min=20)])
    submit = SubmitField('Subscribe')


class LusaContactInContactus(FlaskForm):
    name = StringField('Name *', validators=[DataRequired()])
    phNumber = StringField('Phone Number',
                           validators=[Length(min=10, max=13)])
    email = StringField('Email address *',
                        validators=[DataRequired(), Email()])
    subject = TextAreaField('Subject',
                           validators=[Length(min=20)])
    message = TextAreaField('Message',
                           validators=[Length(min=20)])
    submit = SubmitField('Send')