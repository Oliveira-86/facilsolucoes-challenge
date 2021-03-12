import React from "react"
import ContentLoader from "react-content-loader"

const ContractsCardLoader = () => (
    <ContentLoader
        speed={1}
        width={1100}
        height={460}
        viewBox="0 0 1100 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#d6d2d2"
    >
        <rect x="98" y="73" rx="0" ry="0" width="2" height="1" />
        <rect x="33" y="57" rx="0" ry="0" width="0" height="1" />
        <rect x="8" y="40" rx="0" ry="0" width="1100" height="53" />
        <rect x="11" y="108" rx="0" ry="0" width="1100" height="53" />
        <rect x="11" y="182" rx="0" ry="0" width="1100" height="53" />
    </ContentLoader>
)

export default ContractsCardLoader