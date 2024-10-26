import './Pagination.css'

export default function Pagination({ total, limit, getFn }) {

    const btns = Math.ceil(total / limit);

    let btnArray = [];

    for(let i = 0; i < btns; i++) {
        btnArray.push(<button className="pagination-button" onClick={() => getFn(i)}> { i + 1 } </button>)
    }

    return (
        <div className="pagination-container">
            { btnArray }
        </div>
    )
}