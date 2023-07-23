# Portfolio Web Application

This is my portfolio web application built using React.js, Vite, Node.js, and Express. It showcases my projects, skills, and provides a way for visitors to get in touch with me.

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

You'll need Node.js and npm installed on your machine.

### Installation

1. Clone this repository:

git clone https://github.com/MiroslavGit/portfolio.git

2. Change into the Client directory:

cd portfolio/Client

3. Install the client dependencies:

npm install

4. Change into the Server directory:

cd ../Server

5. Install the server dependencies:

npm install

### Development

To run the client in development mode:

npm run dev

To run the server using nodemon:

npx nodemon

### Building for Production

To build the client for production:

npm run build

### API Helper

The server includes an API Helper page that displays all the available API routes and their descriptions. To access the API Helper page, visit `http://localhost:3000/` after running the server.

### Sending Emails

The server also includes a route to send emails from the portfolio to the admin. To use this feature, make sure to configure the environment variables for the Gmail API credentials and your email address.

1. Create a `.env` file in the Server directory with the following variables:

CLIENT_ID=your_gmail_api_client_id
CLIENT_SECRET=your_gmail_api_client_secret
REDIRECS_URI=your_gmail_api_redirect_uri
REFRESH_TOKEN=your_gmail_api_refresh_token
MY_EMAIL=your_email_address

2. Replace `your_gmail_api_client_id`, `your_gmail_api_client_secret`, `your_gmail_api_redirect_uri`, `your_gmail_api_refresh_token`, and `your_email_address` with your actual Gmail API credentials and email address.

### Deploying

You can deploy the client and server separately using Vercel or any other hosting platform.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
