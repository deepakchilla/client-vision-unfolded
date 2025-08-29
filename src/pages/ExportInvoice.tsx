import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Send, Plus, Trash2 } from "lucide-react";

const ExportInvoice = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [invoiceItems, setInvoiceItems] = useState([
    { id: 1, description: "", quantity: "", rate: "", amount: "" }
  ]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const addInvoiceItem = () => {
    const newId = Math.max(...invoiceItems.map(item => item.id)) + 1;
    setInvoiceItems([...invoiceItems, { id: newId, description: "", quantity: "", rate: "", amount: "" }]);
  };

  const removeInvoiceItem = (id: number) => {
    if (invoiceItems.length > 1) {
      setInvoiceItems(invoiceItems.filter(item => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onToggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <main className="flex-1 lg:ml-0">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Export Invoice</h1>
                <p className="text-muted-foreground">Create and manage export invoices with automated compliance</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Templates
                </Button>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Generate
                </Button>
              </div>
            </div>

            <Tabs defaultValue="create" className="space-y-4">
              <TabsList>
                <TabsTrigger value="create">Create Invoice</TabsTrigger>
                <TabsTrigger value="recent">Recent Invoices</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>

              <TabsContent value="create" className="space-y-6">
                {/* Invoice Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Invoice Information</CardTitle>
                    <CardDescription>Basic invoice details and party information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="invoiceNumber">Invoice Number</Label>
                        <Input id="invoiceNumber" placeholder="INV-2024-001" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="invoiceDate">Invoice Date</Label>
                        <Input id="invoiceDate" type="date" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="buyerName">Buyer Name</Label>
                        <Input id="buyerName" placeholder="Buyer Company Ltd." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD</SelectItem>
                            <SelectItem value="eur">EUR</SelectItem>
                            <SelectItem value="gbp">GBP</SelectItem>
                            <SelectItem value="inr">INR</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="buyerAddress">Buyer Address</Label>
                      <Textarea id="buyerAddress" placeholder="Complete buyer address" rows={3} />
                    </div>
                  </CardContent>
                </Card>

                {/* Invoice Items */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Invoice Items</CardTitle>
                        <CardDescription>Add products/services to the invoice</CardDescription>
                      </div>
                      <Button onClick={addInvoiceItem} size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Item
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {invoiceItems.map((item) => (
                        <div key={item.id} className="grid grid-cols-12 gap-4 items-end p-4 border border-border rounded-sm">
                          <div className="col-span-5">
                            <Label htmlFor={`description-${item.id}`}>Description</Label>
                            <Input 
                              id={`description-${item.id}`}
                              placeholder="Product description"
                            />
                          </div>
                          <div className="col-span-2">
                            <Label htmlFor={`quantity-${item.id}`}>Quantity</Label>
                            <Input 
                              id={`quantity-${item.id}`}
                              type="number"
                              placeholder="0"
                            />
                          </div>
                          <div className="col-span-2">
                            <Label htmlFor={`rate-${item.id}`}>Rate</Label>
                            <Input 
                              id={`rate-${item.id}`}
                              type="number"
                              placeholder="0.00"
                            />
                          </div>
                          <div className="col-span-2">
                            <Label htmlFor={`amount-${item.id}`}>Amount</Label>
                            <Input 
                              id={`amount-${item.id}`}
                              type="number"
                              placeholder="0.00"
                              readOnly
                            />
                          </div>
                          <div className="col-span-1">
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => removeInvoiceItem(item.id)}
                              disabled={invoiceItems.length === 1}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Export Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Export Details</CardTitle>
                    <CardDescription>Shipping and export-specific information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="portOfLoading">Port of Loading</Label>
                        <Input id="portOfLoading" placeholder="Mumbai Port" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portOfDischarge">Port of Discharge</Label>
                        <Input id="portOfDischarge" placeholder="New York Port" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="countryOfOrigin">Country of Origin</Label>
                        <Input id="countryOfOrigin" placeholder="India" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="countryOfDestination">Country of Destination</Label>
                        <Input id="countryOfDestination" placeholder="United States" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="termsOfDelivery">Terms of Delivery</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select delivery terms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fob">FOB</SelectItem>
                          <SelectItem value="cif">CIF</SelectItem>
                          <SelectItem value="cfr">CFR</SelectItem>
                          <SelectItem value="exw">EXW</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>
                    <Send className="w-4 h-4 mr-2" />
                    Generate Invoice
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="recent">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Invoices</CardTitle>
                    <CardDescription>View and manage your recent export invoices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      No recent invoices found. Create your first invoice to get started.
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="templates">
                <Card>
                  <CardHeader>
                    <CardTitle>Invoice Templates</CardTitle>
                    <CardDescription>Pre-configured templates for different export scenarios</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      Templates will be available soon. Use the create tab to build custom invoices.
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default ExportInvoice;