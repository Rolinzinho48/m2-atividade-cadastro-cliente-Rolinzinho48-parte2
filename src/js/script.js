import { Api } from "./Api.js";

const clientes = await Api.listarClientes()
const ul = document.querySelector(".clienteInfo")

const sla = ul.children




 function renderizarClientes(){
     clientes.forEach((element)=>{
         
         const li = document.createElement("li")
        
         let data = new Date(element.data_nasc)
         let nascimento

         if(data!=null){
             nascimento = (data.getDate()+1) + "/" + (data.getMonth()+1) + "/" + data.getFullYear()
         }
         else{
             nascimento = ""
         }
         
         
     
         li.innerHTML = `
             <p><strong>Nome</strong>: ${element.nome}</p>
             <p><strong>Idade</strong>: ${element.idade}</p>
             <p><strong>CPF</strong>: ${element.cpf}</p>
             <p><strong>Data de nascimento</strong>: ${nascimento}</p>
             <p><strong>Sexo</strong>: ${element.sexo}</p>
             <p><strong>E-mail</strong>: ${element.email} </p>
             <p><strong>Telefone</strong>: ${element.telefone_fixo}</p>
     
     
             <h3>Endereço:</h3>
             <p><strong>CEP</strong>: ${element.endereco.cep}</p>
             <p><strong>Rua</strong>: ${element.endereco.rua}</p>
             <p><strong>Numero</strong>: ${element.endereco.numero}</p>
             <p><strong>Bairro</strong>: ${element.endereco.bairro}</p>
             <p><strong>Cidade</strong>: ${element.endereco.cidade}</p>
             <p><strong>Estado</strong>: ${element.endereco.estado}</p>
         `
     
         ul.append(li)
     
     })
 }

 renderizarClientes()