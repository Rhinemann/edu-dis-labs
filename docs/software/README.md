# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
CREATE OR REPLACE DATABASE mydb;
USE mydb;

CREATE USER if not exists `user`@`localhost` IDENTIFIED BY 'SumerianSQL';
GRANT ALL PRIVILEGES ON mydb.* TO `user`@`localhost`;

CREATE TABLE mydb.account (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(64),
    password CHAR(128)
);

CREATE TABLE mydb.survey (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    isPaused BOOLEAN,
    isNamed BOOLEAN,
    name VARCHAR(256),
    duration VARCHAR(256),
    account_id INT NOT NULL REFERENCES account(id)
);

CREATE TABLE mydb.question (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    text VARCHAR(256),
    survey_id INT NOT NULL REFERENCES survey(id)
);

CREATE TABLE mydb.link (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    uses INT,
    responces INT,
    usageLimit INT,
    responceLimit INT,
    path VARCHAR(256),
    survey_id INT NOT NULL REFERENCES survey(id)
);

CREATE TABLE mydb.responce (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    value TEXT(16384),
    question_id INT NOT NULL REFERENCES question(id),
    account_id INT REFERENCES account(id)
);
```

## RESTfull сервіс для управління даними на python з використанням Flask
__service.py__:
```python
from flask import Flask, request, jsonify, Response
import mariadb
from config import config

app = Flask(__name__)


def get_connection() -> mariadb.Connection | tuple[Response, int]:
    try:
        connection = mariadb.connect(**config)
        return connection
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка підключення до бази даних: {e}"}), 500


@app.route('/')
def hello_world():
    return "<p>Root of the server</p>"

@app.route('/accounts', methods=['GET'])
def get_accounts():
    try:
        connection = get_connection()
        if not isinstance(connection, mariadb.Connection):
            return connection
        cursor = connection.cursor()

        cursor.execute('SELECT * FROM account')
        accounts = cursor.fetchall()

        cursor.close()
        connection.close()
        return jsonify(accounts)
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка підключення до бази даних: {e}"}), 500

@app.route('/account/<int:id>', methods=['GET'])
def get_account_by_id(id):
    try:
        connection = get_connection()
        if not isinstance(connection, mariadb.Connection):
            return connection
        cursor = connection.cursor()

        cursor.execute('SELECT * FROM account where id = ?', (id,))
        account = cursor.fetchone()

        cursor.close()
        connection.close()
        if account is None:
            return jsonify({"error": "Акаунт не знайдено"}), 404
        return jsonify(account)
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка підключення до бази даних: {e}"}), 500


@app.route('/account', methods=['POST'])
def create_account():
    try:
        new_account = request.json
        connection = get_connection()
        if not isinstance(connection, mariadb.Connection):
            return connection
        cursor = connection.cursor()

        cursor.execute(
            'INSERT INTO account (username, password) VALUES (?, ?)',
            (new_account.get('username'), new_account.get('password'))
        )

        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({"success": "Акаунт створено успішно", "data": new_account}), 201
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка створення акаунта: {e}"}), 500


@app.route('/account/<int:id>', methods=['PUT'])
def update_account(id):
    try:
        updated_account = request.json
        connection = get_connection()
        if not isinstance(connection, mariadb.Connection):
            return connection
        cursor = connection.cursor()

        cursor.execute(
            'UPDATE account SET username = ?, password = ? WHERE id = ?',
            (updated_account.get('username'), updated_account.get('password'), id)
        )

        connection.commit()
        cursor.close()
        connection.close()
        if cursor.rowcount == 0:
            return jsonify({"error": f"Помилка оновлення: Акаунта з таким id не існує"}), 404
        else:
            return jsonify({"success": f"Акаунт з ID {id} успішно оновлено", "data": updated_account}), 202
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка оновлення акаунта: {e}"}), 500


@app.route('/account/<int:id>', methods=['DELETE'])
def delete_account(id):
    try:
        connection = get_connection()
        if not isinstance(connection, mariadb.Connection):
            return connection
        cursor = connection.cursor()
        
        cursor.execute('DELETE FROM account WHERE id = ?', (id,))

        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({"success": f"Акаунт з ID {id} успішно видалено"}), 200
    except mariadb.Error as e:
        return jsonify({"error": f"Помилка видалення акаунта: {e}"}), 500


if __name__ == '__main__':
    app.run(debug=False)
```

__config.py__:
```python
config = {
    'user': 'user',
    'password': 'SumerianSQL',
    'host': 'localhost',
    'port': 3306,
    'database': 'mydb'
}
```
