# Hamna Fitness Dojo - Personal Fitness Training

## Project Overview

**Level Up Your Fitness** is a full-stack application designed to help users achieve their fitness goals through personalized workout and nutrition plans. This platform caters to individuals at all levels of their fitness journey, providing tools for tracking progress, managing diet, and staying motivated.

## Todo List
### **Configurations** :-
- [x] Create a new repository and initialize the next.js project
- [x] Add a README file

### **Frontend** :-
- [ ] Skeleton UI
- [ ] Implement Plan Based Onboarding forms 
- [ ] Implement DashBoard
- [ ] Implement Gym Plan Page (AI Based + form input based)
- [ ] Implement  Nutrition Plan Page (AI Based + form input based)
- [ ] Implement Gym-tracker(A detailed Page where we can show every little insight)
- [ ] Implement Nutri-tracker(A detailed Page where we can show every little insight)
- [ ] User Session 
- [ ] Responsive design (!important)
- [ ] Create a new Page for the user to get the payment details
- [ ] Create a new Page for the user to get the payment history
- [ ] Create a new Page for the user to get the payment status
- [ ] Create a new Page for the user to get the payment receipt
- [ ] Or create a Payment dashboard which will include these

### **Backend** :-
- [x] Create a new Database and connect it to the project Prisma(postgres)
- [x] Create a new schema for the database
- [x] Create a new model for the database
- [ ] Create basic backend layout
- [ ] Create a new user authentication system
- [ ] Add a new user profile system
- [ ] Create API route for OenAI to generate workout plans
- [ ] Implementing the OpenAI API
- [ ] Create a new API route for the user to get the workout plan
- [ ] Create a new API route for the user to get the nutrition plan
- [ ] Create a new API route for the user to get the meal plan
- [ ] Create a new API route for the user to get the recipe
- [ ] Payment Gateway Integration
- [ ] Create a new API route for the user to get the payment details
- [ ] Create a new API route for the user to get the payment history
- [ ] Create a new API route for the user to get the payment status
- [ ] Create a new API route for the user to get the payment receipt

### Core Features

- **User Authentication and Authorization**
  - Implement a secure login system for users, trainers, and administrators.
  - Develop role-based access control to ensure data privacy and security.

- **User Profile Management**
  - Create detailed user profiles including age, gender, weight, height, fitness goals, and health conditions.
  - Allow users to update their personal information and track their progress over time.

- **Personalized Workout Plans**
  - Generate custom workout plans based on user profiles and fitness goals.
  - Offer different levels of difficulty (beginner, intermediate, advanced) for workouts.
  - Provide video tutorials and step-by-step instructions for each exercise.

- **Nutrition and Diet Plans**
  - Develop personalized diet plans based on the user’s fitness goals and dietary preferences.
  - Include detailed nutritional information for each meal.
  - Share recipes and meal prep instructions.

- **Activity Tracking**
  - Enable users to log workouts, track progress, and analyze performance.
  - Implement visual representation of daily, weekly, and monthly activity.

## Contributing to the Project
1. **Fork the Repository**: Start by forking the repository to your own GitHub account.

2. **Clone the Repository**: Next, clone the forked repository to your local machine:

    ```bash
    git clone https://github.com/<your-username>/<repository-name>.git
    ```

3. **Create a New Branch**: Navigate into the cloned repository and create a new branch for your changes:

    ```bash
    cd <repository-name>
    git checkout -b <branch-name>
    ```

    Replace `<branch-name>` with a descriptive name for your branch (e.g., `add-new-feature`).

4. **Make Your Changes**: Make the changes you want to contribute. Be sure to follow the project's coding standards and conventions.

5. **Commit Your Changes**: Once you've made your changes, stage and commit them:

    ```bash
    git add .
    git commit -m "Your descriptive commit message"
    ```

6. **Push Your Changes**: Push your changes to your forked repository on GitHub:

    ```bash
    git push origin <branch-name>
    ```
  7. Before committing your changes, make sure to configure the OAuth credentials for Google and GitHub. Obtain the OAuth client ID and secret for both platforms and add them to the `.env` file in the project root directory. The file should look like this:

## Environment Variables Setup 
| Environment Variable | Description                    |
|----------------------|--------------------------------|
| `POSTGRES_DATABASE`  | The name of your PostgreSQL database |
| `POSTGRES_HOST`      | The host address of your PostgreSQL database |
| `POSTGRES_PASSWORD`  | The password for your PostgreSQL database |
| `POSTGRES_PRISMA_URL`| Prisma connection string for your PostgreSQL database with pooling |
| `POSTGRES_URL`       | Connection string for your PostgreSQL database |
| `POSTGRES_URL_NON_POOLING` | Connection string for your PostgreSQL database without pooling |
| `POSTGRES_URL_NO_SSL`| Connection string for your PostgreSQL database without SSL |
| `POSTGRES_USER`      | The user for your PostgreSQL database |
| `DATABASE_URL`       | Your postgres connection string |
| `GITHUB_ID`          | Your GitHub App ID             |
| `GITHUB_SECRET`      | Your GitHub App Secret         |
| `GOOGLE_ID`          | Your Google Client ID          |
| `GOOGLE_SECRET`      | Your Google Client Secret      |
| `NEXTAUTH_SECRET`    | Your NextAuth Secret           |
| `NEXTAUTH_URL`       | The URL for your NextAuth application |

  Thank you for your contribution to **Hamna Fitness Dojo**! We appreciate your help in making our project better.

### License

[Insert License Here]

This project is open source and available under the [Insert License Name] License.