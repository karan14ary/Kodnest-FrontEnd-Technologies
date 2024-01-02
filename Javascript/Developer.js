class Developer{
work(){
    console.log("Develop softwares")
}
}
class JavaDeveloper extends Developer{
language="Java"
 doWork(){
console.log("Do Backend work")
}
learn(){
    console.log("Java Developer is learning java")
}
}
class FrontendDeveloper extends Developer{
   language="HTML,CSS,JavaScript"
    doWork(){
        console.log("Do Frontend work")
        }
        learn(){
            console.log("Frontend Developer is learning frontend Technologies")
        }
}
jd=new JavaDeveloper()
ft=new FrontendDeveloper()
jd.work()
jd.learn()
console.log("Java Developer use "+jd.language+ " programming language" )
jd.doWork()
ft.work()
ft.learn()
console.log("Frontend Developer uses Technologies like "+jd.language )
ft.doWork()