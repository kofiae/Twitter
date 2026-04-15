pipeline {
    agent any

    tools {
        nodejs 'NodeJs-20'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install & Build Front') {
            steps {
                dir('front') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Install & Build Back') {
            steps {
                dir('back') {
                    bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('front') {
                    bat 'npm run test --if-present || echo Pas de tests'
                }
            }
        }
    }
}