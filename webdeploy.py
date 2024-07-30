# Don't Remove Credit Tg - @VJ_Botz
# Subscribe YouTube Channel For Amazing Bot https://youtube.com/@Tech_VJ
# Ask Doubt on telegram @KingVJ01

# requirements.txt file .....

Flask==1.1.2
gunicorn==20.1.0
Jinja2==3.0.3
werkzeug==2.0.2
itsdangerous==2.0.1

# run cmd.txt file .......

gunicorn app:app & python3 main.py
              or
gunicorn app:app & python3 bot.py

# app.py file ........

from flask import Flask

# Initialize the Flask application
app = Flask(__name__)

# Define a route for the root URL ('/')
@app.route('/')
def hello_world():
    # Return a block of ASCII art text when the root URL is accessed
    return """Bot is Running"""

# Run the application
if __name__ == "__main__":
    # Set the host to '0.0.0.0' to make the server publicly available
    # Set the port to 8080
    app.run(host='0.0.0.0', port=8080)
  
