import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { db } from "../../db/config/firebase";
const CoinForm = () => {
  const coinHandler = () => {};
  return (
    <div className="fixed inset-0  bg-opacity-30 backdrop-blur-sm">
      <div>
        {/* https://www.youtube.com/watch?v=Gy4G68WoHq4 */}
        <button>close</button>
        okhey this is working in black, will do css / bootstrap part later
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Comment:</Form.Label>
            <Form.Control
              type="password"
              placeholder="any message/point/memory you want to drop"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              CoinHandler;
            }}
          >
            ADD
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CoinForm;
