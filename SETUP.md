# Setup Instructions

## Environment Configuration

This project uses environment variables to securely store Firebase configuration. Follow these steps to set up your environment:

### 1. Create Environment File

Copy the example environment file to create your own:

```bash
cp .env.example .env
```

### 2. Configure Firebase Credentials

1. Go to your [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Navigate to Project Settings > General
4. Scroll down to "Your apps" section
5. Click on the web app (or create one if it doesn't exist)
6. Copy the configuration values to your `.env` file

### 3. Update .env File

Open `.env` and replace the placeholder values with your actual Firebase credentials:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Verify Setup

Run the app to verify your Firebase configuration is working:

```bash
npm start
```

## Security Notes

- **Never commit `.env` files to version control** - The `.gitignore` file is configured to prevent this
- The `.env.example` file should only contain placeholder values, never real credentials
- Each developer should have their own `.env` file with their project's credentials
- For production deployments, use your platform's environment variable management system

## Additional Resources

- [Firebase Setup Documentation](https://firebase.google.com/docs/web/setup)
- [Expo Environment Variables](https://docs.expo.dev/guides/environment-variables/)
