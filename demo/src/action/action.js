



const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

export const increase = (num) => ({
    type: INCREASE,
    payload: {
        num,
    },
  });

export const decrease = (num) =>({
    type:DECREASE,
    payload:{
        num
    }
})