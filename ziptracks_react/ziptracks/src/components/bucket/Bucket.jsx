

const Bucket = (props) => {
    const {
        selectedProducts
    } = props

    return (
        <div
            className="bucket"
        >
            <h1>Корзина</h1>
            {Object.entries(selectedProducts).map(([id, count]) => (
                <div key={id}>
                    Товар с ID: {id} — Количество: {count}
                </div>
            ))}
        </div>
    )
}

export default Bucket