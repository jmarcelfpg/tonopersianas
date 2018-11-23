// import { Divider } from '@material-ui/core';
import * as React from 'react';
import LoaderSpinner from '../../LoaderSpinner';
import CardPresentation from '../../material-ui/CardPresentation';
import ProductCard from '../../material-ui/ProductCard';

import homeInfo from './HomeInfo.json';

import "./Home.css"

export default class Home extends React.Component {
    public render() {
        return (
            <div className="home">
                <div className="home-content">
                    <CardPresentation />
                </div>
                <div className="home-content">
                    {this.displayInfo()}
                    <LoaderSpinner hide={true} />
                </div>
            </div>
        )
    }

    private displayInfo() {
        return homeInfo.map((info: InfoProps, index) => (
            <ProductCard title={info.title} header={info.header} content={info.info} srcImage={info.srcImage} key={index} />
        ))
    }
}

interface InfoProps {
    title: string;
    header: string;
    info: string;
    srcImage: string;
}