export const geradorSenha=() =>{
    const rand=()=>Math.random(0).toString(36).substr(2);
    const token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
    return token(12).toUpperCase()
}