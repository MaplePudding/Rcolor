export let RandomColor = {
    mp: {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15},

    tp: {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    },

    getValue: function(val1:string, val2: string){
        if(this.mp[val1] > this.mp[val2]){
            return ""
        }else{
            while(true){
                let tmp = Math.round(Math.random() * this.mp[val2])
                if(tmp >= this.mp[val1]){
                    return this.tp[tmp];
                }
            }
        }
    },


    getRandomColor: function(left = "000000", right = "FFFFFF") {
        let res:string = "";

        for(let i = 0; i < left.length; ++i){
            let tempStr = this.getValue(left[i], right[i]);
            if(tempStr === ""){
                return ""
            }else{
                res += tempStr;
            }
        }

        return "#" + res;
    }
}

