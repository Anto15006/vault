function NewWindow(){
    url = 'http://3.139.138.221:8080/jenkins/login'
    window.open(url,'_blank')
    document.getElementById('renderhtml').src = url;
    let getDOm = document;
}