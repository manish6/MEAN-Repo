pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18'
        BUILD_DIR = 'dist'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }
        
        stage('Setup Node.js') {
            steps {
                echo 'Setting up Node.js environment...'
                sh 'node --version'
                sh 'npm --version'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci --only=production'
            }
        }
        
        stage('Build Angular App') {
            steps {
                echo 'Building Angular application...'
                sh 'npx ng build --configuration=production'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm run test -- --no-watch --no-progress --browsers=ChromeHeadless'
            }
        }
        
        stage('Archive Build') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: "${BUILD_DIR}/**/*", allowEmptyArchive: false
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                script {
                    // Copy built files to deployment directory
                    sh """
                        sudo rm -rf /var/www/html/angular-app || true
                        sudo mkdir -p /var/www/html/angular-app
                        sudo cp -r ${BUILD_DIR}/* /var/www/html/angular-app/
                        sudo chown -R www-data:www-data /var/www/html/angular-app
                    """
                }
            }
        }
    }
    
    post {
        success {
            echo '✅ Pipeline completed successfully!'
            // Send success notifications if needed
        }
        failure {
            echo '❌ Pipeline failed!'
            // Send failure notifications if needed
        }
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
    }
}
