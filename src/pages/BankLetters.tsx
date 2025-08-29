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
import { Badge } from "@/components/ui/badge";
import { Mail, FileText, Building, Send, Download, Plus } from "lucide-react";

const BankLetters = () => {
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
                <h1 className="text-3xl font-bold text-foreground">Bank Letters</h1>
                <p className="text-muted-foreground">Generate formal letters for bank document submission</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Templates
                </Button>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Letter
                </Button>
              </div>
            </div>

            <Tabs defaultValue="create" className="space-y-4">
              <TabsList>
                <TabsTrigger value="create">Create Letter</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
                <TabsTrigger value="sent">Sent Letters</TabsTrigger>
              </TabsList>

              <TabsContent value="create" className="space-y-6">
                {/* Letter Header */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="w-5 h-5 mr-2" />
                      Letter Header
                    </CardTitle>
                    <CardDescription>Company letterhead and recipient details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" defaultValue="Global Export Solutions Ltd." />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="companyAddress">Company Address</Label>
                      <Textarea 
                        id="companyAddress" 
                        rows={3}
                        defaultValue="456 Export Plaza, Floor 15&#10;Business District&#10;Mumbai, Maharashtra 400001, India"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bankName">Bank Name</Label>
                        <Input id="bankName" placeholder="State Bank of India" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="branchName">Branch Name</Label>
                        <Input id="branchName" placeholder="Export Finance Branch" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bankAddress">Bank Address</Label>
                      <Textarea 
                        id="bankAddress" 
                        rows={3}
                        placeholder="Enter complete bank address"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Letter Content */}
                <Card>
                  <CardHeader>
                    <CardTitle>Letter Content</CardTitle>
                    <CardDescription>Subject, reference, and letter body</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="letterDate">Date</Label>
                        <Input id="letterDate" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="referenceNumber">Reference Number</Label>
                        <Input id="referenceNumber" placeholder="REF/EXP/2024/001" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="Submission of Export Documents for Letter of Credit Settlement"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="salutation">Salutation</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select salutation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dear-sir">Dear Sir/Madam</SelectItem>
                          <SelectItem value="dear-manager">Dear Manager</SelectItem>
                          <SelectItem value="to-whom">To Whom It May Concern</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="letterBody">Letter Body</Label>
                      <Textarea 
                        id="letterBody" 
                        rows={8}
                        placeholder="Enter the main content of your letter..."
                        defaultValue="We are pleased to submit the export documents for the following shipment for your kind perusal and necessary action for Letter of Credit settlement.

We request you to kindly process the documents at the earliest and credit the proceeds to our account as per the terms of the Letter of Credit.

We look forward to your prompt response and thank you for your continued support."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="closing">Closing</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select closing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yours-faithfully">Yours Faithfully</SelectItem>
                          <SelectItem value="yours-sincerely">Yours Sincerely</SelectItem>
                          <SelectItem value="best-regards">Best Regards</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Document Attachments */}
                <Card>
                  <CardHeader>
                    <CardTitle>Document Attachments</CardTitle>
                    <CardDescription>Select documents to include with the letter</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="exportInvoice">Export Invoice</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select invoice" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inv-001">INV-2024-001</SelectItem>
                            <SelectItem value="inv-002">INV-2024-002</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="packingList">Packing List</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select packing list" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pl-001">PL-2024-001</SelectItem>
                            <SelectItem value="pl-002">PL-2024-002</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="billOfLading">Bill of Lading</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select B/L" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bl-001">BL-2024-001</SelectItem>
                            <SelectItem value="bl-002">BL-2024-002</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="shippingBill">Shipping Bill</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select shipping bill" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sb-001">SB-2024-001</SelectItem>
                            <SelectItem value="sb-002">SB-2024-002</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="brcDetails">BRC Details</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select BRC" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brc-001">BRC-2024-001</SelectItem>
                          <SelectItem value="brc-002">BRC-2024-002</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Signatory Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Signatory Details</CardTitle>
                    <CardDescription>Information about the person signing the letter</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="signatoryName">Name</Label>
                        <Input id="signatoryName" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="designation">Designation</Label>
                        <Input id="designation" placeholder="Export Manager" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber">Contact Number</Label>
                        <Input id="contactNumber" placeholder="+91 9876543210" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@company.com" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Save as Draft</Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button>
                    <Send className="w-4 h-4 mr-2" />
                    Generate Letter
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="drafts" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Draft Letters</CardTitle>
                    <CardDescription>Your saved draft letters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border border-border rounded-sm p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-foreground">Letter for LC Settlement - INV-2024-001</h4>
                          <Badge variant="outline">Draft</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Created: 2 hours ago • Last modified: 1 hour ago
                        </p>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Duplicate</Button>
                          <Button size="sm">Generate</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sent" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sent Letters</CardTitle>
                    <CardDescription>Previously generated and sent letters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border border-border rounded-sm p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-foreground">Letter for LC Settlement - INV-2024-001</h4>
                          <Badge variant="secondary">
                            <Mail className="w-3 h-3 mr-1" />
                            Sent
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Sent to: State Bank of India, Export Finance Branch • Date: 15 Jan 2024
                        </p>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Download PDF</Button>
                          <Button variant="outline" size="sm">Resend</Button>
                        </div>
                      </div>
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

export default BankLetters;