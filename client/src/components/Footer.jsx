import React from 'react';
import * as LucideIcons from 'lucide-react';

const Footer = () => {
  const { Github, Twitter, Linkedin, Instagram } = LucideIcons;
  const GitHubIcon = Github || LucideIcons.GitHub || LucideIcons.Package;
  const LinkedInIcon = Linkedin || LucideIcons.Linkedin || LucideIcons.Package;
  const TwitterIcon = Twitter || LucideIcons.Twitter || LucideIcons.Package;
  const InstagramIcon = Instagram || LucideIcons.Instagram || LucideIcons.Package;

  return (
    <footer className="py-24 px-6 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-primary">DigiTools</span>
            </div>
            <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
              Empowering digital workflows through premium tools and assets. Join 50K+ users who are building better products with DigiTools.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"><TwitterIcon className="w-5 h-5" /></a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"><GitHubIcon className="w-5 h-5" /></a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"><LinkedInIcon className="w-5 h-5" /></a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"><InstagramIcon className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-extrabold text-slate-800 mb-8 uppercase text-xs tracking-widest">Product</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">AI Writer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design Pack</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Stock Assets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-slate-800 mb-8 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-slate-800 mb-8 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">License</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 uppercase font-black tracking-widest">
          <p>© 2026 DigiTools Platform. Built with classic precision.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            <a href="#" className="hover:text-primary transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
