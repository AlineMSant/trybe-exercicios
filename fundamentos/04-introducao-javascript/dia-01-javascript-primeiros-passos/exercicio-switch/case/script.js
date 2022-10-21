let statusCandidato = "lista";

switch(statusCandidato){
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprova":
        console.log("Você foi reprovado(a)");
        break;
default:
    console.log("Informação incorreta");
}
