### Setting Up

1. Install dependencies:

```bash
npm install
```

2. Create an `.env` file and fill the environment variables:

```bash
# Add all of the environmental variables here instead of 
# embedding them directly in the app and utilize them 
# with the `DotEnv` package.

PORT=3000
MONGO_URI='<MongoDB_Connection_String>'
```

### Testing

1. Run the `nodemon` development server:

```bash
npm run dev
```

2. Use an API development platform such as [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test the API.