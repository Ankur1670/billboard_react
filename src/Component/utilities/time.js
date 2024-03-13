function doFormat(date){
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let d=new Date(date)
    console.log(d,)
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

export default doFormat