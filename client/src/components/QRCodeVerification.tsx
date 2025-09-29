import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, ExternalLink } from "lucide-react";

interface QRCodeVerificationProps {
  transactionHash: string;
  explorerUrl: string;
  qrCodeData: string;
}

export default function QRCodeVerification({
  transactionHash,
  explorerUrl,
  qrCodeData,
}: QRCodeVerificationProps) {
  const handleViewBlockchain = () => {
    console.log('Opening blockchain explorer:', explorerUrl);
    window.open(explorerUrl, '_blank');
    // TODO: remove mock functionality - open actual blockchain explorer
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <QrCode className="w-5 h-5 text-primary" />
          Blockchain Verification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* QR Code Placeholder */}
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
            <QrCode className="w-16 h-16 text-muted-foreground" />
          </div>
        </div>

        {/* Transaction Hash */}
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-foreground">Transaction Hash</p>
          <p className="text-xs font-mono text-muted-foreground break-all bg-muted p-2 rounded">
            {transactionHash}
          </p>
        </div>

        {/* Blockchain Explorer Link */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={handleViewBlockchain}
            data-testid="button-view-blockchain"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            View on Hyperledger Explorer
          </Button>
        </div>

        {/* QR Code Data Info */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Scan QR code to verify product authenticity
          </p>
        </div>
      </CardContent>
    </Card>
  );
}