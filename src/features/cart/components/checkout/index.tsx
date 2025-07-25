import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import Button from "@/shared/components/button";



type CheckoutProps = {
    totalPrice: string;
}

const Checkout = ({ totalPrice }: CheckoutProps) => {
    const [formData, setformData] = useState({
        amount: parseInt(totalPrice, 10).toString(),
        tax_amount: "0",
        total_amount: parseInt(totalPrice, 10).toString(),
        transaction_uuid: uuidv4(),
        product_service_charge: "0",
        product_delivery_charge: "0",
        product_code: "EPAYTEST",
        success_url: "http://localhost:3000/payment-success",
        failure_url: "http://localhost:3000/payment-failure",
        signed_field_names: "total_amount,transaction_uuid,product_code",
        signature: "",
        secret: "8gBm/:&EnhH.1/q",
    });

    // generate signature function
    const generateSignature = (
        total_amount: string,
        transaction_uuid: string,
        product_code: string,
        secret: string
    ) => {
        const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
        const hash = CryptoJS.HmacSHA256(hashString, secret);
        const hashedSignature = CryptoJS.enc.Base64.stringify(hash);
        return hashedSignature;
    };

    // useeffect
    useEffect(() => {
        const { total_amount, transaction_uuid, product_code, secret } = formData;
        const hashedSignature = generateSignature(
            total_amount,
            transaction_uuid,
            product_code,
            secret
        );

        setformData({ ...formData, signature: hashedSignature });
    }, [formData.amount, totalPrice]);

    return (
        <>
            <form
                action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
                method="POST"
            >
                <div className="field">
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        autoComplete="off"
                        hidden
                        value={formData.amount}
                        onChange={({ target }) =>
                            setformData({
                                ...formData,
                                amount: target.value,
                                total_amount: target.value,
                            })
                        }
                        required
                    />
                </div>
                <input
                    type="hidden"
                    id="tax_amount"
                    name="tax_amount"
                    value={formData.tax_amount}
                    required
                />
                <input
                    type="hidden"
                    id="total_amount"
                    name="total_amount"
                    value={formData.total_amount}
                    required
                />
                <input
                    type="hidden"
                    id="transaction_uuid"
                    name="transaction_uuid"
                    value={formData.transaction_uuid}
                    required
                />
                <input
                    type="hidden"
                    id="product_code"
                    name="product_code"
                    value={formData.product_code}
                    required
                />
                <input
                    type="hidden"
                    id="product_service_charge"
                    name="product_service_charge"
                    value={formData.product_service_charge}
                    required
                />
                <input
                    type="hidden"
                    id="product_delivery_charge"
                    name="product_delivery_charge"
                    value={formData.product_delivery_charge}
                    required
                />
                <input
                    type="hidden"
                    id="success_url"
                    name="success_url"
                    value={formData.success_url}
                    required
                />
                <input
                    type="hidden"
                    id="failure_url"
                    name="failure_url"
                    value={formData.failure_url}
                    required
                />
                <input
                    type="hidden"
                    id="signed_field_names"
                    name="signed_field_names"
                    value={formData.signed_field_names}
                    required
                />
                <input
                    type="hidden"
                    id="signature"
                    name="signature"
                    value={formData.signature}
                    required
                />

                <div className="field">
                    <input hidden type="text" value={'abhishek'} />
                </div>

                <div className="field">
                    <input hidden type="text" value={'kumar'} />
                </div>
                <input className="btn" value="Pay via E-Sewa" type="submit" />
            </form>

            <Button
                value='Checkout'
                btnType='primary'
                className='w-full mt-[32px]'
            />
        </>
    );
};

export default React.memo(Checkout);