pipeline {
  agent any
  tools {
    nodejs "npm"
  }
    stages {
        stage('install packages') {
            steps {
                echo "installing npm packages"
                npm 'install'
            }
        }
    }
}
