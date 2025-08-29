import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Ship, Upload, Download, FileText, AlertCircle, CheckCircle } from "lucide-react";

const ShippingBills = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
                <h1 className="text-3xl font-bold text-foreground">Shipping Bills</h1>
                <p className="text-muted-foreground">Import shipping bills from customs or email attachments</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
                <Button>
                  <Upload className="w-4 h-4 mr-2" />
                  Import Bills
                </Button>
              </div>
            </div>

            <Tabs defaultValue="import" className="space-y-4">
              <TabsList>
                <TabsTrigger value="import">Import Bills</TabsTrigger>
                <TabsTrigger value="imported">Imported Bills</TabsTrigger>
                <TabsTrigger value="icegate">ICEGATE Sync</TabsTrigger>
              </TabsList>

              <TabsContent value="import" className="space-y-6">
                {/* Manual Upload */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Upload className="w-5 h-5 mr-2" />
                      Manual Upload
                    </CardTitle>
                    <CardDescription>Upload shipping bills manually from PDF files or email attachments</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-sm p-8 text-center">
                      <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">Drop files here or click to browse</h3>
                      <p className="text-muted-foreground mb-4">Supports PDF, PNG, JPG files up to 10MB</p>
                      <Button>Choose Files</Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="shipmentNumber">Shipment Number</Label>
                        <Input id="shipmentNumber" placeholder="Enter shipment number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billDate">Bill Date</Label>
                        <Input id="billDate" type="date" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Import */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Email Import
                    </CardTitle>
                    <CardDescription>Import shipping bills directly from email attachments</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="emailAddress">Email Address</Label>
                      <Input 
                        id="emailAddress" 
                        type="email" 
                        placeholder="customs@port.gov.in" 
                        defaultValue="shipping@customs.gov.in"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fromDate">From Date</Label>
                        <Input id="fromDate" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="toDate">To Date</Label>
                        <Input id="toDate" type="date" />
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Fetch from Email
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="imported" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Imported Shipping Bills</CardTitle>
                    <CardDescription>View and manage imported shipping bill records</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Sample Data */}
                      <div className="border border-border rounded-sm p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <Ship className="w-8 h-8 text-primary" />
                            <div>
                              <h4 className="font-medium text-foreground">SB-2024-001245</h4>
                              <p className="text-sm text-muted-foreground">Mumbai Port - Container TCLU1234567</p>
                            </div>
                          </div>
                          <Badge variant="secondary">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Processed
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Bill Date:</span>
                            <span className="ml-2 text-foreground">15 Jan 2024</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Port:</span>
                            <span className="ml-2 text-foreground">INMUN</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Value:</span>
                            <span className="ml-2 text-foreground">$45,000</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2 mt-4">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Download PDF</Button>
                        </div>
                      </div>
                      
                      <div className="border border-border rounded-sm p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <Ship className="w-8 h-8 text-primary" />
                            <div>
                              <h4 className="font-medium text-foreground">SB-2024-001244</h4>
                              <p className="text-sm text-muted-foreground">Chennai Port - Container ABCD9876543</p>
                            </div>
                          </div>
                          <Badge variant="outline">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Pending
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Bill Date:</span>
                            <span className="ml-2 text-foreground">14 Jan 2024</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Port:</span>
                            <span className="ml-2 text-foreground">INMAA</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Value:</span>
                            <span className="ml-2 text-foreground">$32,500</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2 mt-4">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Download PDF</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="icegate" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>ICEGATE Integration</CardTitle>
                    <CardDescription>Automatically sync shipping bills from ICEGATE portal</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-sm">
                      <h4 className="font-medium text-foreground mb-2">Integration Status</h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-success rounded-full"></div>
                        <span className="text-sm text-foreground">Connected to ICEGATE</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Last sync: 2 hours ago • Next sync: in 4 hours
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="syncFromDate">Sync From Date</Label>
                        <Input id="syncFromDate" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="syncToDate">Sync To Date</Label>
                        <Input id="syncToDate" type="date" />
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button>
                        <Download className="w-4 h-4 mr-2" />
                        Sync Now
                      </Button>
                      <Button variant="outline">Configure Auto Sync</Button>
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

export default ShippingBills;