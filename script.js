// ARRAY

// var avgTemp = []

// avgTemp[0] = 31.9
// avgTemp[1] = 35.3
// avgTemp[2] = 42
// avgTemp[3] = 38
// avgTemp[4] = 25.5

// console.log(avgTemp[3])

// ARRAY

// // Não é a melhor pratica iniciar um array criando um objeto,é melhor usar da forma a cima
// // var daysOfWeek = new Array('Sunday' ,'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday')
// // Seria melhor assim:
// var daysOfWeek = ['Sunday' ,'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

// // console.log(daysOfWeek.length)
// // console.log(daysOfWeek[2])
// for (let i = 0; i < daysOfWeek.length; i++) {
//     console.log(daysOfWeek[1])
// }

// var fibonacci = []
// fibonacci[0] = 0
// fibonacci[1] = 1
// fibonacci[2] = 1

// for(var i=3; i<20; i++) {
//     fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
// }

// console.log(fibonacci)

// for(var i=0; i<fibonacci.length; i++) {
//     console.log(fibonacci[i])
// }

// INSERIR ELEMENTOS NO ARRAY .push()
// var numbers = [0,1,2,3,4,5,,6,7,8,9]

// //forma errada:
// numbers[numbers.length] = 10

// // adiciona um elemento depois do ultimo elemento do array
// numbers.push(11)
// numbers.push(12)
// numbers.push(13)
// numbers.push(14)
// numbers.push(15)
// numbers.push(16)

// // adiciona um elemento no primeiro indice do array,entrando no lugar do index[0]
// // unshift n ira sobreescrever o nosso array ira acrescentar um elemento no index[0] e "somar os outros elemento ""index[x+1]"""
// numbers.unshift(-1)
// numbers.unshift(-2)
// numbers.unshift(-3)
// numbers.unshift(-4)

// REMOVENDO ELEMENTOS DO ARRAY
// // remove o ultimo elemento do nosso array .pop
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()

// // removendo o elemento do inicio do nosso array .shift 
// numbers.shift()
// numbers.shift()
// numbers.shift()
// numbers.shift()

// // console.log(numbers)

// // AULA 8 inserindo e removendo elementos em uma posição específica no nosso array .splice

// // splice(apartir do elemento 3, remova 4 elementos)
// numbers.splice(3,4)

// // spice(apartir do elemento 3, remova 0 elementos, insira 3,4,5)
// numbers.splice(3,0,3,4,5)

// console.log(numbers)

// ARRAY BIDIMENSIONAL

// var avgTempWeek = []

// var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
// var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8]

// avgTempWeek[0] = avgTempWeek1
// avgTempWeek[1] = avgTempWeek2

// console.log(avgTempWeek[0][2]) // = 19

// AULA 9 ARRAYS TRIDIMENSIONAIS

// var month = []

// var firstWeeks = []
// var lastWeeks = []

// var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
// var avgTempWeek2 = [25, 39.2, 25.3, 12, 32, 41.6, 9]

// var avgTempWeek3 = [28, 28, 28.7, 18, 19 , 44.1, 31.7, 52.1]
// var avgTempWeek4 = [14 , 36, 28, 12.5, 45, 5.6, 21.4, 22.9]

// firstWeeks = [avgTempWeek1, avgTempWeek2]
// lastWeeks = [avgTempWeek3, avgTempWeek4]

// month = [firstWeeks, lastWeeks]
// // console.log(month)

// for(var x = 0; x < month.length; x++) {
//     for(var y = 0; y < month[x].length; y++) {
//         for(var z = 0; z < month[x][y].length; z++) {
//             console.log(month[x][y][z])
//         }
//     }
// }

// PILHAS , PRIMEIRO A ENTRAR É O ULTIMO A SAIR

// estrutura da nosso classe de pilha
function Stack() {
    var items = []

    this.push = function(element){
        // adiciona um novo item à pilha
        items.push(element)
    }

    this.pop = function(){
        // remover o item do topo da pilha
        return items.pop()
    }
    this.peek = function(){
        // devolve o elemento que está no topo da pilha,ultimo elemento do array
        return items[items.length - 1]
    }
    this.isEmpty = function(){
        // informar se a pilha está vazia ou não. 
        return items.length === 0 //true=vazio , false= n esta vazia
    }
    this.clear = function(){
        // limpar a pilha
        items  = []
    }
    this.size = function(){
        // informar o tamanho da pilha
        return items.length
    }
    this.print = function(){
        // imprime a pilha no console
        console.log(items.toString())
    }
}
//OBJETO
// var pilha = new Stack() //instanciando a classe

// pilha.push(2)
// pilha.push(4)
// pilha.push(6)
// pilha.push(8)
// pilha.push(10)

// // pilha.pop()
// // pilha.clear()

// // console.log(pilha.peek())
// // console.log(pilha.size())
// // console.log(pilha.isEmpty())
// pilha.print()
/////////////////////////////////////////////////////////
//Análise gráfica das pilhas
// var pilha = new Stack() //instanciando a classe

// pilha.push(5)
// pilha.print()
// pilha.push(8)
// pilha.print()
// pilha.push(11)
// pilha.print()
// pilha.push(15)
// pilha.print()

// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()

// console.log(pilha.isEmpty())

// DECIMAL PARA BINÁRIO(PILHAS)

// function dec2Bin(decNumber) {//23
//     var restStack = [],
//     rest,
//     binaryString = ''

//     while(decNumber > 0) {//0
//         rest = Math.floor(decNumber % 2)//1
//         restStack.push(rest)//[1,1,1,0,1]
//         decNumber = Math.floor(decNumber / 2)//0
//     }

//     while(restStack.length > 0) {//0
//         binaryString += restStack.pop().toString()//10111
//     }
//     return binaryString
// }
// console.log(dec2Bin(25))

////////////////////////////////////////////////////////////////////////
// CONVERSOR DE BASE(PILHA)
// 
// function baseConverter(decNumber, base){// 123, 26
//     var restStack = [],
//     rest,
//     baseString = '',
//     digits = '0123456789ABCDEF'

//     while(decNumber > 0){//0
//         rest = Math.floor(decNumber % base)//7
//         restStack.push(rest)//[11,7]
//         decNumber = Math.floor(decNumber / base)//0
//     }

//     while(restStack.length > 0){//0
//         baseString += digits[restStack.pop()]//7B
//     }
//     return baseString//7B
// }

// console.log(baseConverter(123, 16))

///////////////////////////////////////////////////////////
//FILAS

function Queue(){
    var items = []

    this.enqueue = function(){
        //adiciona um novo item
        items.push(element)
    }
    this.dequeue = function(){
        //remove um item
        return items.shift()
    }
    this.front = function(){
        //retorna o primeiro elemento da fila
        return items[0]
    }
    this.isEmpty = function(){
        //verifica se a fila está vazia ou não
        return items.length === 0
    }
    this.size = function(){
        //retorna o tamanho da fila
        return items.length
    }
    this.print = function(){
        //imprimir a fila no console
        console.log(items.toString())
    }
}