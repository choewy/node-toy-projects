'use strict';

const CartErrors = {
  NotFoundGoods: () => ({
    code: 400,
    message: '존재하지 않는 상품입니다.',
  }),
};

export default CartErrors;
