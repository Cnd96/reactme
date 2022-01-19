import React, {Component} from 'react';
import {Input, Pagination, PaginationItem, PaginationLink} from 'reactstrap';

class AppPagination extends Component {

    state = {
        pageLength: 10,
        paginationArray: []
    };

    onPageSizeChange = (e) => {
        this.setState({
            pageLength: e.target.value
        }, () => {
            this.props.onPaginationChange({
                rows: this.state.pageLength,
                page: 1
            });
        });
    };

    componentDidMount() {
        if (this.props.pageLength) {
            this.setState({
                pageLength: this.props.pageLength
            }, () => {
                this.generatePaginationArray();
            });
        } else {
            this.generatePaginationArray();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.totalNoOfPages && this.props.currentPageNo
            && (prevProps.currentPageNo != this.props.currentPageNo
                || prevProps.totalNoOfPages != this.props.totalNoOfPages)) {
            this.generatePaginationArray();
        }

        if (this.props.pageLength && this.props.pageLength != prevProps.pageLength) {
            this.setState({
                pageLength: this.props.pageLength
            });
        }

        if (prevProps.totalNoOfPages !== 0 && this.props.totalNoOfPages === 0) {
            this.generatePaginationArray();
        }
    }

    onPaginationChange = (e) => {
        this.props.onPaginationChange({
            rows: this.state.pageLength,
            page: e
        });
    };

    generatePaginationArray = () => {
        let pagination = [];
        let currentPageNo = this.props.currentPageNo ? this.props.currentPageNo : 1;
        let totalNoOfPages = this.props.totalNoOfPages ? this.props.totalNoOfPages : 1;

        if (currentPageNo - 2 >= 1) {
            pagination.push(currentPageNo - 2);
        }

        if (currentPageNo - 1 >= 1) {
            pagination.push(currentPageNo - 1);
        }

        pagination.push(currentPageNo);

        if (currentPageNo + 1 <= totalNoOfPages) {
            pagination.push(currentPageNo + 1);
        }

        if (currentPageNo + 2 <= totalNoOfPages) {
            pagination.push(currentPageNo + 2);
        }

        this.setState({
            paginationArray: pagination
        });
    };

    render() {
        let currentPageNo = this.props.currentPageNo ? this.props.currentPageNo : 1;
        let totalNoOfPages = this.props.totalNoOfPages ? this.props.totalNoOfPages : 1;

        return (
            <div className='main-pagination' style={{float: 'right'}}>

                <div className='inline-block' style={{
                    marginRight: '10px',
                    verticalAlign: 'middle',
                    float: 'left'
                }}>
                    <Input
                        type="select"
                        className='inline-block'
                        value={this.state.pageLength}
                        onChange={this.onPageSizeChange}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </Input>
                </div>

                <Pagination className='inline-block' style={{
                    float: 'left'
                }}>
                    <PaginationItem disabled={currentPageNo == 1}>
                        <PaginationLink first onClick={() => {
                            this.onPaginationChange(1)
                        }}/>
                    </PaginationItem>
                    <PaginationItem disabled={currentPageNo == 1}>
                        <PaginationLink onClick={() => {
                            this.onPaginationChange(currentPageNo - 1)
                        }} previous/>
                    </PaginationItem>

                    {
                        this.state.paginationArray.map((page) => {
                            return (
                                <PaginationItem key={page} active={page == currentPageNo}>
                                    <PaginationLink onClick={() => {
                                        this.onPaginationChange(page)
                                    }}>
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })
                    }

                    <PaginationItem disabled={currentPageNo == totalNoOfPages}>
                        <PaginationLink next onClick={() => {
                            this.onPaginationChange(currentPageNo + 1)
                        }}/>
                    </PaginationItem>
                    <PaginationItem disabled={currentPageNo == totalNoOfPages}>
                        <PaginationLink last onClick={() => {
                            this.onPaginationChange(totalNoOfPages)
                        }}/>
                    </PaginationItem>
                </Pagination>

            </div>
        );
    }
}

Pagination.propTypes = {};

export default AppPagination;
