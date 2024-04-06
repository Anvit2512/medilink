from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/internal.html', methods=['GET', 'POST'])
def internal():
    if request.method == 'POST':
        # Handle the POST request
        pass
    return render_template('internal.html')

@app.route('/external.html', methods=['GET', 'POST'])
def external():
    if request.method == 'POST':
        # Handle the POST request
        pass
    return render_template('external.html')

@app.route('/videos', methods=['GET'])
def videos():
    body_part = request.args.get('body_part')
    # Assuming you have a dictionary mapping body parts to YouTube video links
    youtube_links = {
        'head': 'https://youtube.com/watch?v=KeZXgE9q6eo&feature=shared',
        'torso': 'youtube_link_for_torso_video',
        'left-arm': 'https://youtube.com/watch?v=qX4i72H9zpI&feature=shared',
        'right-arm': 'https://youtube.com/watch?v=qX4i72H9zpI&feature=shared',
        'left-leg': 'https://youtu.be/5GVYiD0WzaE?si=k9NLcqq0zYsIf-fb',
        'right-leg': 'https://youtu.be/5GVYiD0WzaE?si=k9NLcqq0zYsIf-fb'
    }
    video_link = youtube_links.get(body_part, '')
    return video_link

if __name__ == '__main__':
    app.run(debug=True)
