import React from 'react'
import ContainerProfile from '../../Components/Container-profile/ContainerProfile'
import Table from '../../Components/Table/Table'
import TableHead from '../../Components/TableHead/TableHead'
import TableRow from '../../Components/TableRow/TableRow'

export default function Profile(){
    return(
        <ContainerProfile>
            <Table>
                <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Idade</TableHead>
                    <TableHead>Função</TableHead>
                    <TableHead>Empresa</TableHead>
                </TableRow>
                <TableRow>
                    <TableHead>Aleatorio da silva</TableHead>
                    <TableHead>21</TableHead>
                    <TableHead>Dev</TableHead>
                    <TableHead>Dev</TableHead>
                </TableRow>
            </Table>
        </ContainerProfile>
    )
}