const Detailtable = ({material}) => {




    return (
        <table>
            <tbody>
                <tr>
                    <th>Brand</th>
                    <td>Lorem Ispum</td>
                </tr>
                <tr>
                    <th>Product Dimension</th>
                    <td>30 x 28 x 90</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>{material}</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Detailtable