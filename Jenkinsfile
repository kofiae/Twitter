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
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Install & Build Back') {
            steps {
                dir('back') {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('front') {
                    sh 'npm run test --if-present || echo "Pas de tests"'
                }
            }
        }
    }
}