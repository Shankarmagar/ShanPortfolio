ximport { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Award } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

export const Certifications = () => {
  const { data: certifications, isLoading } = useQuery({
    queryKey: ["certifications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("certifications")
        .select("*")
        .order("issue_date", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
        </div>
        
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card border-border">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : certifications && certifications.length > 0 ? (
          <div className="space-y-4">
            {certifications.map((cert) => (
              <Card 
                key={cert.id} 
                className="bg-card border-border hover:card-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        {cert.title}
                        {cert.credential_url && (
                          <a 
                            href={cert.credential_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </CardTitle>
                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>Issued: {format(new Date(cert.issue_date), "MMM yyyy")}</span>
                        {cert.expiry_date && (
                          <>
                            <span>•</span>
                            <span>Expires: {format(new Date(cert.expiry_date), "MMM yyyy")}</span>
                          </>
                        )}
                        {cert.credential_id && (
                          <>
                            <span>•</span>
                            <span>ID: {cert.credential_id}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                {cert.description && (
                  <CardContent>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No certifications to display yet. Add some from your backend!</p>
          </div>
        )}
      </div>
    </section>
  );
};