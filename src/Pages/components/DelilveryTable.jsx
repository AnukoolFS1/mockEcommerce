const Deliverytable = ({ th, value, setState, state }) => {
    return (
                <tr>
                    <th>{th}</th>
                    <td>
                        <p>{value}</p>
                    </td>
                        <td className="change" onClick={() => setState(p => !p)}>{state ? "Cancel" : "Change"}</td>
                </tr>
    )
}

export default Deliverytable