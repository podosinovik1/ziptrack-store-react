import { useInView } from "react-intersection-observer"

const BucketPlaceholder = () => {
    const { ref, inView } = useInView({
        threshold: 1.0,
    })

    console.log(inView)

    return (
        <div
            ref={ref}
            style={{
                width: '100%',
                height: '100px',
                backgroundColor: "var(--accent)",
                textAlign: 'center',
                fontSize: '36px'
            }}
        >
            КОРЗИНА
        </div>
    )
}

export default BucketPlaceholder