import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';

import { useGetCryptosQuery } from '../api/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);

    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  if(isFetching) return <Loader />;

  return (
    <>
    {!simplified && (
        <div className="search-crypto">
        <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
    )}
    
    <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((coin) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
            <Link key={coin.uuid} to={`/crypto/${coin.uuid}`}>
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={coin.iconUrl}
                    alt={`${coin.name}`}
                  />
                }
                hoverable
              >
                <p>Price: {millify(coin.price)}</p>
                <p>Market Cap: {millify(coin.marketCap)}</p>
                <p>Daily Change: {coin.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
