pipeline{
    agentany
    stages{
        stage('PULL') {
            sh 'git pull https://github.com/Shiv3415/task.git '
        }
        stage('BUILD') {
            sh 'docker build -t shiv3415/image123 . '
        }
        stage('PUSH') {
            sh 'docker login -u shiv3415 -p Shiv3415@'
            sh 'docker push shiv3415/image123'
        }
        stage('DEPLOY') {
         kubernetesDeploy configs: 'deployment.yaml', kubeConfig: [path: ''], kubeconfigId: 'kubeconfigid', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']   
        }
    }
}