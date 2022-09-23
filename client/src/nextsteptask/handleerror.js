export default function HandleError(error){
    return(
        <div>
            <p> OPS!! some thing is Wrong!!</p>
            {error[2]}
        </div>

    )
}