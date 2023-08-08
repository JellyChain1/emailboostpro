# Email Validation API

Welcome to the Email Validation API, a lightweight and efficient solution for sending validation emails to user-provided email addresses. This simple yet powerful Node.js application leverages the Express framework and Nodemailer library to facilitate seamless communication between your front-end and server, ensuring a smooth user experience.

## Features

- **User-Friendly Interface**: The API provides an intuitive interface that allows users to submit their email addresses for validation.
- **Secure Authentication**: Utilizes environment variables to store email credentials securely, ensuring sensitive information remains confidential.
- **Cross-Origin Resource Sharing (CORS)**: CORS is handled with ease, enabling seamless communication between different origins.
- **Static File Hosting**: Serves static files from the 'public' directory, making integration with your front-end hassle-free.
- **Error Handling**: Robust error handling guarantees smooth operation and graceful responses even in the face of unforeseen issues.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using `npm install`.

## Usage

1. Update the `.env` file with your Gmail credentials:
   ```env
   EMAIL_USER=your@gmail.com
   EMAIL_PASS=your-password
   PORT=3000
   ```

2. Start the server:
   ```bash
   node app.js
   ```

3. Access the API via your front-end application by sending a POST request to `/send-validation-email` with a JSON payload containing the email address.

## API Endpoint

### POST /send-validation-email

Sends a validation email to the provided email address.

- Request Body:
  ```json
  {
      "email": "recipient@example.com"
  }
  ```

- Response (Success):
  ```json
  {
      "message": "Email sent successfully"
  }
  ```

- Response (Error):
  ```json
  {
      "error": "Failed to send email"
  }
  ```

## Contributions

Contributions and suggestions are welcome! Feel free to fork this repository and submit pull requests to enhance the functionality or improve the documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

With the Email Validation API, you can seamlessly integrate email validation into your applications, providing your users with a reliable and secure method to verify their email addresses. Enjoy the simplicity and power of this solution as you enhance your user experience and streamline your validation processes.