import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, Bell, Moon, Globe, Database, Mail, Key } from "lucide-react";

const Settings = () => {
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
                <h1 className="text-3xl font-bold text-foreground flex items-center">
                  <SettingsIcon className="w-8 h-8 mr-3" />
                  Settings
                </h1>
                <p className="text-muted-foreground">Manage your application preferences and configurations</p>
              </div>
            </div>

            <Tabs defaultValue="general" className="space-y-4">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
                <TabsTrigger value="data">Data & Backup</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-6">
                {/* Appearance */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Moon className="w-5 h-5 mr-2" />
                      Appearance
                    </CardTitle>
                    <CardDescription>Customize the look and feel of your application</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                        <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
                      </div>
                      <Switch id="dark-mode" />
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <Label htmlFor="theme-color">Theme Color</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select theme color" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blue">Blue</SelectItem>
                          <SelectItem value="green">Green</SelectItem>
                          <SelectItem value="purple">Purple</SelectItem>
                          <SelectItem value="red">Red</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="font-size">Font Size</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select font size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Language & Region */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Language & Region
                    </CardTitle>
                    <CardDescription>Set your preferred language and regional settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                            <SelectItem value="de">German</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC</SelectItem>
                            <SelectItem value="est">Eastern Time</SelectItem>
                            <SelectItem value="pst">Pacific Time</SelectItem>
                            <SelectItem value="ist">India Standard Time</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currency">Default Currency</Label>
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
                      
                      <div className="space-y-2">
                        <Label htmlFor="date-format">Date Format</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select date format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                            <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                            <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Reset to Default</Button>
                  <Button>Save Changes</Button>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="w-5 h-5 mr-2" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>Configure how and when you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Email Notifications</h4>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="export-updates">Export Updates</Label>
                          <p className="text-sm text-muted-foreground">Notifications about export processing and status changes</p>
                        </div>
                        <Switch id="export-updates" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="document-ready">Document Ready</Label>
                          <p className="text-sm text-muted-foreground">When invoices and packing lists are generated</p>
                        </div>
                        <Switch id="document-ready" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="compliance-alerts">Compliance Alerts</Label>
                          <p className="text-sm text-muted-foreground">Important regulatory and compliance notifications</p>
                        </div>
                        <Switch id="compliance-alerts" defaultChecked />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Push Notifications</h4>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="browser-notifications">Browser Notifications</Label>
                          <p className="text-sm text-muted-foreground">Show notifications in your browser</p>
                        </div>
                        <Switch id="browser-notifications" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="mobile-push">Mobile Push</Label>
                          <p className="text-sm text-muted-foreground">Receive push notifications on mobile devices</p>
                        </div>
                        <Switch id="mobile-push" />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Notification Frequency</h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="digest-frequency">Email Digest</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="never">Never</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="integrations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Key className="w-5 h-5 mr-2" />
                      ICEGATE Integration
                    </CardTitle>
                    <CardDescription>Configure your ICEGATE connection for automated data import</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="icegate-username">ICEGATE Username</Label>
                      <Input id="icegate-username" placeholder="Your ICEGATE username" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="icegate-password">ICEGATE Password</Label>
                      <Input id="icegate-password" type="password" placeholder="Your ICEGATE password" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-sync">Auto Sync</Label>
                        <p className="text-sm text-muted-foreground">Automatically sync data from ICEGATE</p>
                      </div>
                      <Switch id="auto-sync" />
                    </div>
                    
                    <Button className="w-full">Test Connection</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Integration
                    </CardTitle>
                    <CardDescription>Configure email settings for document delivery</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="smtp-server">SMTP Server</Label>
                      <Input id="smtp-server" placeholder="smtp.gmail.com" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="smtp-port">Port</Label>
                        <Input id="smtp-port" placeholder="587" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smtp-security">Security</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select security" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tls">TLS</SelectItem>
                            <SelectItem value="ssl">SSL</SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="smtp-username">Username</Label>
                        <Input id="smtp-username" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smtp-password">Password</Label>
                        <Input id="smtp-password" type="password" placeholder="Email password" />
                      </div>
                    </div>
                    
                    <Button className="w-full">Test Email Configuration</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="data" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="w-5 h-5 mr-2" />
                      Data Management
                    </CardTitle>
                    <CardDescription>Manage your data, backups, and exports</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Data Export</h4>
                      <p className="text-sm text-muted-foreground">Export your data for backup or migration purposes</p>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline">Export Invoices</Button>
                        <Button variant="outline">Export Packing Lists</Button>
                        <Button variant="outline">Export All Data</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Automatic Backup</h4>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-backup">Enable Auto Backup</Label>
                          <p className="text-sm text-muted-foreground">Automatically backup your data daily</p>
                        </div>
                        <Switch id="auto-backup" defaultChecked />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="backup-retention">Backup Retention</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select retention period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="7">7 days</SelectItem>
                            <SelectItem value="30">30 days</SelectItem>
                            <SelectItem value="90">90 days</SelectItem>
                            <SelectItem value="365">1 year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-destructive">Danger Zone</h4>
                      <div className="p-4 border border-destructive/20 rounded-sm bg-destructive/5">
                        <p className="text-sm text-muted-foreground mb-4">
                          These actions are irreversible. Please proceed with caution.
                        </p>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Clear All Data</Button>
                          <Button variant="destructive" size="sm">Delete Account</Button>
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

export default Settings;