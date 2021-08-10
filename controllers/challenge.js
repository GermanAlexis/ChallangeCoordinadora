const average = (req, res) => {

    const { number1, number2 } = req.body

    try {
        if(typeof(number1) != 'number' || typeof(number1) != 'number'){
            return res.status(401).json({
                ok: false,
                mensaje: 'solo se permiten numeros'
            })
        }
            const response = (number1 + number2) / 2;
            console.log(response)
            return res.status(201).json({
                ok: true,
                mensaje: response
            })
    } catch (e) {
        console.log(e)
        throw new TypeError("Ha ocurrido un error con este reto");
        
    }
}

const deletesign = (req, res) => {

    const { random } = req.body
    work = random.split('!')
    
    t4 = work[0].length
    r3 = random.length - 1
    if(r3 > 2){

        return res.status(201).json({
            ok: true,
            mensaje: random.substr(0, r3)
            })
    } else {
        return res.status(201).json({
            ok: true,
            mensaje: random
            })
    }
}


const sumArray = (req, res) => {
   const { random } = req.body

   try {
    let sumtotal, positive, pars, impars
    random.forEach(level1 => {
        level1.forEach(level2 => {
            if (typeof (level2) == Number) {
                if (level1[level2] > 0) {
                    positive = positive + level1[level2]
                }
                if (level1[level2] % 2 == 0) {
                    pars = pars + level1[level2]
                } else {
                    impars = impars + level1[level2]
                }
                sumtotal = sumtotal + level1[level2]
            } else {
                console.log('Solo se puede sumar numeros')
            }
        })
    })
    res.status(200).json({
        ok: true,
        mensaje: 'Valores retornados', 
        sumtotal,
        })
   } catch (error) {
       console.log(error)
       return res.status(500).json({
        ok: false,
        mensaje: 'ver logs',
        })
    }
}
    


const TransformArray = (req, res) => {
    const{ random, type } = req.body
    try {
     
        order = []
        random.forEach(level1 => {
            level1.forEach(level2 => {
                if (Number.isInteger(level2)) {
                    order.push(level2)
                }
            })
        })
    
        switch (type) {
            case 'ASC':
                order.sort((a, b) => a - b)
                break
            case 'DES':
                order.sort((a, b) => b - a)
                break
    
        }
    
        res.status(200).json({
            ok: true,
            mensaje: order,
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            mensaje: 'ver logs',
        })
    }
}


const sevenCows = (req, res ) => {
    
   const { week } = req.body
   try {
    prodTodays = []
    let today = 0
    if(week.length <= 7) {
        week.forEach(level1 => {
            if (level1.length <= 50) {
                level1.forEach(level2 => {
                    if(level2 >= 0  && level2 < 12 ){
                        today = today + level2
                    } else {
                        mensage = "El valor de debe estar 0.0 y 11.9"
                    }
                })
            } else {
                mensage = "El valor debe ser en 3 y 50 para las vacas"
            }
        })
        res.status(200).json({
            ok: true,
            mensaje: `el total del hato es ${today}`,
            dayproductor: milkdays(week),
            productorWeek: producctionmajor(week)

        })
    } else {
        mensage = "El valor debe ser menor a 8"
    }

    return res.status(401).json({
        ok: false,
        mensaje: mensage
    })
   } catch (error) {
       console.log(error)
       return res.status(500).json({
        ok: false,
        mensaje: 'ver logs'
    })
   }
}


const milkdays = (arrayProd) => {

    prodTodays = []
    let today = [] , other1 = []
    if(arrayProd.length <= 7){
        arrayProd.forEach(level1 => {
          today = level1.reduce((a,b) => a + b, 0 )
          other1.push( today )
        })
    }

    let major = 0, menor = other1[0], positionmajor = 0, positionmenor = 0
     other1.forEach((element, index) => {
        if( element >= major ){
            major = element
            positionmajor = index
        } else if(menor > element){
            menor = element
            positionmenor = index
        }
    })
    md = {
        mayor: major,
        "posicion mayor": positionmajor,
        menor: menor,
        "posicion menor": positionmenor
    }
    return md

}

const producctionmajor = (productarray) =>{

    dp = []

    productarray.forEach((level1, index) => {
        max = Math.max(...level1)
        vaca = level1.indexOf(max)
        dp.push({
            vaca: vaca + 1,
            dia: index + 1
        })
    })

   return dp
}

const arrayscore = (req, res) => {
    
  const { random } = req.body
  try {
    let sumtotal = 0
    
    random.forEach(level1 => {
        if (level1 % 2 == 0) {
            sumtotal = sumtotal + 1
        }
        if (level1  % 2 != 0 && level1  != 5 ) {
            sumtotal = sumtotal + 3
            
        } else if( level1  == 5 ) {
             sumtotal =  sumtotal + 5 
        }
    })

    res.status(200).json({
        ok: true,
        mensaje: `score total obtenido ${sumtotal}`
    })
  } catch (error) {
      console.log(error)
      return res.status(500).json({
        ok: false,
        mensaje: 'Ver logs'
    })
      
  }
 
}

module.exports = {
    arrayscore,
    sevenCows,
    TransformArray,
    sumArray,
    deletesign,
    average,

}