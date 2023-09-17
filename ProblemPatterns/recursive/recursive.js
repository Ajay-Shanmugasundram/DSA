function recursive(array) {

    if (array.length != 0) {
        if (array[0] % 2 === 0) {
            (array.shift())
            console.log(array)
            recursive(array)
        } else {
            console.log(array[0] +" "+ "is a odd")
            return
        }
    }

}

recursive(['2132', '21321', '8883', '011930', '212'])