from flask import Flask, jsonify, request

app = Flask(__name__)

complaints = []

@app.route('/api/complaints', methods=['GET', 'POST'])
def handle_complaints():
    if request.method == 'POST':
        data = request.json
        complaints.append(data)
        return jsonify({'message': 'Complaint registered successfully'}), 201
    else:
        return jsonify(complaints)

if __name__ == '__main__':
    app.run(debug=True)
