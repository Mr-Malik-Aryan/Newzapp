# NewZapp

NewZapp is a simple React application that allows users to fetch and display the latest news using the [News API](https://newsapi.org/). Please note that the API requests have Cross-Origin Resource Sharing (CORS) disabled, so to experience the full functionality, it is recommended to clone and launch the application on localhost.

## Getting Started

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/NewZapp.git
    ```

2. Navigate to the project directory:

    ```bash
    cd NewZapp
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your News API key:

    ```env
    REACT_APP_NEWS_API_KEY=your_api_key_here
    ```

    You can obtain an API key by signing up on the [News API](https://newsapi.org/).

5. Run the application:

    ```bash
    npm start
    ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view NewZapp with the latest news.

## Note

The live version of NewZapp is hosted on [https://newzapp-vear.vercel.app/](https://newzapp-vear.vercel.app/), but please be aware that this version only displays old news due to CORS restrictions on the deployed site. For real-time news updates, it's recommended to run the application locally.

## Contributing

If you'd like to contribute to NewZapp, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out if you have any questions or issues. Happy coding!
