import styled from "styled-components"

const  Th = styled.div.attrs({
    className: "w-1/4 border-2 border-purple-400",
    
})``;
const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <Th>Name</Th>
                    <th className="w-1/4 border-2 border-blue-500">Email</th>
                    <th className="w-1/4 border-2 border-green-300">Phone Number</th>
                    <th className="w-1/4 border-2 border-yellow-300">Contact</th>
                    <th className="border-2 border-red-300 w-1/8">Site</th>
                    <th className="border-2 border-red-500 w-1/8">Status</th>
                    <th className="border-2 border-pink-300 w-1/8">Bell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border-2 border-purple-400">
                        Tadsika Khongkasawan
                    </td>
                    <td className="border-2 border-blue-500">Tadsika@odds.team</td>
                    <td className="border-2 border-green-300">0818888888</td>
                    <td className="border-2 border-yellow-300">Jill(0888888888)</td>
                    <td className="border-2 border-red-300">odds</td>
                    <td className="text-green-600 border-2 border-red-500">
                        Submitted
                    </td>
                </tr>
                <tr>
                    <td className="border-2 border-purple-400">
                        Tadsika Khongkasawan
                    </td>
                    <td className="border-2 border-blue-500">Tadsika@odds.team</td>
                    <td className="border-2 border-green-300">0818888888</td>
                    <td className="border-2 border-yellow-300">Jill(0888888888)</td>
                    <td className="border-2 border-red-300">odds</td>
                    <td className="text-green-600 border-2 border-red-500">
                        Submitted
                    </td>
                </tr>
                <tr>
                    <td className="border-2 border-purple-400">
                        Tadsika Khongkasawan
                    </td>
                    <td className="border-2 border-blue-500">Tadsika@odds.team</td>
                    <td className="border-2 border-green-300">0818888888</td>
                    <td className="border-2 border-yellow-300">Jill(0888888888)</td>
                    <td className="border-2 border-red-300">odds</td>
                    <td className="text-red-600 border-2 border-red-500 ">
                        Not Submit
                    </td>
                </tr>
                <tr>
                    <td className="border-2 border-purple-400">
                        Tadsika Khongkasawan
                    </td>
                    <td className="border-2 border-blue-500">Tadsika@odds.team</td>
                    <td className="border-2 border-green-300">0818888888</td>
                    <td className="border-2 border-yellow-300">Jill(0888888888)</td>
                    <td className="border-2 border-red-300">odds</td>
                    <td className="text-red-600 border-2 border-red-500 ">
                        Not Submit
                    </td>
                </tr>
                <tr>
                    <td className="border-2 border-pink-900">pui pui</td>
                    <td className="border-2 border-pink-900">pui@odds.Team</td>
                    <td className="border-2 border-pink-900">0818888888</td>
                    <td className="border-2 border-pink-900">Jill(0888888888)</td>
                    <td className="border-2 border-pink-900">odds</td>
                    <td className="text-red-600 border-2 border-pink-900 ">
                        Not Submit
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table