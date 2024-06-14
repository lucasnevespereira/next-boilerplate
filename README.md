# Next Boilerplate

A minimal and efficient boilerplate for building Next applications.

## Screenshots

### Light Mode
![Light Mode Screenshot](public/screenshot-light.png)

### Dark Mode
![Dark Mode Screenshot](public/screenshot-dark.png)

## Features

- **UI Framework**: Styled components with [DaisyUI](https://daisyui.com/), a plugin for Tailwind CSS.
- **Theme Management**: Theme switching with light, dark, and custom themes, powered by local storage and the context API. Customize app's appearance easily with [DaisyUI](https://daisyui.com/).
- **Authentication**: Secure authentication using [Kinde](https://kinde.com/).

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/lucasnevespereira/next-boilerplate.git
    cd next-boilerplate
    ```

2. **Remove the existing Git origin:**

    ```bash
    git remote remove origin
    ```

3. **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```


### Setting Up Environment Variables

To configure the application to use Kinde authentication, you need to set up the environment variables. Follow these steps:

1. **Create a `.env` file in the root directory of your project.**

2. **Copy the contents of `.env.example` into your `.env` file:**

    ```env
    KINDE_CLIENT_ID=xxxxxxxxxx
    KINDE_CLIENT_SECRET=xxxxxxxxxx
    KINDE_ISSUER_URL=https://example.kinde.com
    KINDE_SITE_URL=http://localhost:3000
    KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
    KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000
    KINDE_M2M_CLIENT_ID=xxxxxxxxxxx
    KINDE_M2M_CLIENT_SECRET=xxxxxxxxxx
    ```

3. **Replace the placeholder values with your actual Kinde App credentials.**

   ##### Machine-to-Machine (M2M) Application

   In addition to the regular Kinde App configuration, you need to set up a Machine-to-Machine (M2M) application in your Kinde dashboard. The M2M application is used for server-to-server communication, allowing your application to interact with the Kinde management API for tasks such as updating and deleting users.

   To create an M2M application:

   - Go to your Kinde dashboard.
   - Navigate to the 'Applications' section and create a new Machine-to-Machine application.
   - Note down the `M2M Client ID` and `M2M Client Secret` provided.
   - Update your `.env` file with these values:

       ```env
       KINDE_M2M_CLIENT_ID=your_m2m_client_id
       KINDE_M2M_CLIENT_SECRET=your_m2m_client_secret
      ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```