import React from 'react';
import { ProductDetailsType } from '../types/ProductDetailsType';
import { MenuItem, Table } from "@heroui/react";

interface ProductTableProps {
    data: ProductDetailsType;

}

const ProductTablePage = ({ data }: ProductTableProps) => {
    const dataLength=data.markets.length;

    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header >
                            <Table.Column isRowHeader className="font-bold text-lg">বাজার</Table.Column>
                            <Table.Column className="font-bold text-lg">বিভাগ</Table.Column>
                            <Table.Column className="font-bold text-lg">সর্বনিম্ন</Table.Column>
                            <Table.Column className="font-bold text-lg">সর্বাধিক</Table.Column>
                            <Table.Column className="font-bold text-lg">গড়</Table.Column>
                        </Table.Header>

             
                        <Table.Body>
                            {
                            data.markets.map((item,ind)=>(
                             <Table.Row key={ind}>
        
                                  <Table.Cell key={ind}>{item.market}</Table.Cell>
                                    <Table.Cell >{item.division}</Table.Cell>
                                    <Table.Cell className="font-bold">{item.min.toLocaleString("bn-BD")}</Table.Cell>
                                     <Table.Cell className="font-bold">{item.max.toLocaleString("bn-BD")}</Table.Cell>
                                      <Table.Cell className="font-bold">{((item.min+item.max)/2).toLocaleString("bn-BD",{ maximumFractionDigits:2})}</Table.Cell>
               
                                           
                            </Table.Row>))
                            }                       
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default ProductTablePage;