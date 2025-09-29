import QRCodeVerification from '../QRCodeVerification';

export default function QRCodeVerificationExample() {
  return (
    <QRCodeVerification
      transactionHash="0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
      explorerUrl="https://explorer.hyperledger.org/tx/0x1234567890abcdef"
      qrCodeData="https://verify.supply-chain.com/product/MFC-NGP-2024-001"
    />
  );
}